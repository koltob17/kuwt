package htl.kaindorf.kuwt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Map;

@SpringBootApplication
@RestController
public class KuwtApplication {

    private String token = "";

    public static void main(String[] args) {
        SpringApplication.run(KuwtApplication.class, args);
    }

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

    @RequestMapping("/")
    public RedirectView redirectWithRedirectView(){

        String uri = Authentication.getUri();
        RedirectView redirectView = new RedirectView();
        redirectView.setUrl(uri);
        return redirectView;
    }

    @GetMapping("/topGames")
    public String getTopGames()
    {
        String topGames = RequestData.getTopGames(token);

        return topGames;
    }

    @GetMapping("/searchChannels")
    public String searchChannels(@RequestParam(name = "query") String query)
    {
        String searchChannel = RequestData.searchChannels(token,query);

        return searchChannel;
    }

    @GetMapping("/getActiveStreams")
    public String getActiveStreams()
    {
        String streams = RequestData.getActiveStreams(token);

        return streams;
    }

}
