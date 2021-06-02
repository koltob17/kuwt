package htl.kaindorf.kuwt;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.http.HttpRequest;

public class RequestData {

    private static final String client_id = "cybiryufno8r3vb22ll4fy5hk5kmf7";


    /**
     * Liefert dir durch den Token die zurzeit 10 meist geschauten Spiele
     * @param token
     * @return String
     */
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

            return content.toString().replace("{width}","138").replace("{height}","190");

        } catch (Exception e) {
            System.out.println(e);
            return e.toString();
        }

    }

    /**
     * Durch den Token und einem String können alle Streamer gefunden werden die mindestens 1 mal in den
     * letzten 6 Monaten gestreamt haben.
     * @param token
     * @param query
     * @return String
     */
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

            return content.toString().replace("300","25").replace("300","25");

        } catch (Exception e) {
            System.out.println(e);
            return e.toString();
        }

    }

    /**
     * Liefert die Top aktiven Streams zurück.
     * @param token
     * @return String
     */
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
