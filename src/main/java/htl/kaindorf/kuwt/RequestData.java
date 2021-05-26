package htl.kaindorf.kuwt;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.http.HttpRequest;

public class RequestData {

    private static final String client_id = "cybiryufno8r3vb22ll4fy5hk5kmf7";

    public static String getTopGames(String token)
    {
        URL url = null;
        try {
            url = new URL("https://api.twitch.tv/helix/games/top?first=10");
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");

            con.setRequestProperty("client-id",client_id);
            con.setRequestProperty("Authorization","Bearer "+token);

            System.out.println(con.getResponseCode());

            BufferedReader in = new BufferedReader(
                    new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer content = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();
            con.disconnect();

            return content.toString();

        } catch (Exception e) {
            System.out.println(e);
            return e.toString();
        }

    }

    public static String searchChannels(String token, String query)
    {
        URL url = null;

        try {
            url = new URL("https://api.twitch.tv/helix/search/channels?query="+query);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");

            con.setRequestProperty("client-id",client_id);
            con.setRequestProperty("Authorization","Bearer "+token);

            System.out.println(con.getResponseCode());

            BufferedReader in = new BufferedReader(
                    new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer content = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();
            con.disconnect();

            return content.toString();

        } catch (Exception e) {
            System.out.println(e);
            return e.toString();
        }

    }

    public static String getActiveStreams(String token)
    {
        URL url = null;

        try {
            url = new URL("https://api.twitch.tv/helix/streams");
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");

            con.setRequestProperty("client-id",client_id);
            con.setRequestProperty("Authorization","Bearer "+token);

            System.out.println(con.getResponseCode());

            BufferedReader in = new BufferedReader(
                    new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer content = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();
            con.disconnect();

            return content.toString();

        } catch (Exception e) {
            System.out.println(e);
            return e.toString();
        }
    }
}
