package htl.kaindorf.kuwt;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.net.*;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Collection;
import java.util.HashMap;

public class Authentication {

    private static final String client_id = "cybiryufno8r3vb22ll4fy5hk5kmf7";
    private static final String client_secret = "vbwn7x6lpi33g9cywmfh4zb6kzk3u0";
    private static final String redirect_uri = "http://localhost:8080/hello";
    private static final String scopes = "analytics:read:games user:read:email";

    public static String getUri()
    {
        String token = "";

        try {
            URL url = new URL("https://id.twitch.tv/oauth2/authorize?client_id="+client_id+"&redirect_uri="+redirect_uri+"&scope="+scopes+"&response_type=code");

            return url.toString();
        } catch (Exception e) {
            return e.toString();
        }

    }

    public static String getToken(String code)
    {
        try {
            String url = "https://id.twitch.tv/oauth2/token?client_id=cybiryufno8r3vb22ll4fy5hk5kmf7&client_secret=vbwn7x6lpi33g9cywmfh4zb6kzk3u0&grant_type=authorization_code&redirect_uri=http://localhost:8080/hello&code="+code;

            var values = new HashMap<String, String>() {{
                put("client_id", client_id);
                put("code", code);
                put("client_secret",client_secret);
                put("grant_type","authorization_code");
                put("redirect_uri",redirect_uri);
            }};

            var objectMapper = new ObjectMapper();
            String requestBody = objectMapper
                    .writeValueAsString(values);

            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(url))
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();


            HttpResponse<String> response = client.send(request,
                    HttpResponse.BodyHandlers.ofString());

            String[] responseData = response.body().split(",");

            System.out.println(response.body());

            String token = responseData[0].substring(responseData[0].indexOf(":")+1,responseData[0].length()).replace("\"","");

            System.out.println(token);

            return token;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return "fehler";
    }
}
