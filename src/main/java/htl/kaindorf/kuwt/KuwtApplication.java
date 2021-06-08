package htl.kaindorf.kuwt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Map;

@SpringBootApplication
@RestController
public class KuwtApplication {

    /*Der Authorization Token um die Services zu verwenden.*/
    private String token = "";

    public static void main(String[] args) {
        SpringApplication.run(KuwtApplication.class, args);
    }

    /**
     * Weiterleitungsseite um auf die Hauptseite weitergeleitet zu werden
     * @param para
     * @return RedirectView
     */
    @RequestMapping("/hello")
    public @ResponseBody RedirectView getToken(@RequestParam(required = false) Map<String, String> para) {


        para.forEach((a,b) -> {
            System.out.println(String.format("%s -> %s",a,b));
        });

        System.out.println(para);

        this.token = Authentication.getToken(para.get("code"));


        String uri = "http://localhost:4200/welcome";
        RedirectView redirectView = new RedirectView();
        redirectView.setUrl(uri);
        return redirectView;
    }

    /**
     * Diese Seite wird angesurft sobald man die Website öffnet um
     * auf die Twitch Authentifizierung weitergeleitet zu werden.
     * @return RedirectView
     */
    @RequestMapping("/auth")
    public RedirectView redirectWithRedirectView(){

        String uri = Authentication.getUri();
        RedirectView redirectView = new RedirectView();
        redirectView.setUrl(uri);
        return redirectView;
    }

    /**
     * Bei Aufruf werden die Top 10 Games zurückgegeben.
     * @return
     */
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/topGames")
    public String getTopGames()
    {
        String topGames = RequestData.getTopGames(token);

        return topGames;
    }

    /**
     * Bei Aufruf und dem hinzugefügten Parameter werden die passenden Streamer zurückgegeben.
     * @param query
     * @return
     */
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/searchChannels")
    public String searchChannels(@RequestParam(name = "query") String query)
    {
        String searchChannel = RequestData.searchChannels(token,query);

        return searchChannel;
    }

    /**
     * Bei Authentifizierten Aufruf der URL werden die Top aktiven Streams zurückgegeben.
     * @return
     */
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getActiveStreams")
    public String getActiveStreams()
    {
        String streams = RequestData.getActiveStreams(token);

        return streams;
    }

}
