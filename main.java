import com.kigupta.mqtt.simple.Subscriber;
import org.eclipse.paho.client.mqttv3.MqttException;
import java.net.URI;
import java.net.URISyntaxException;

public class Main {
    public static final String BROKER_URL = "https://noname:uuuuu@io.adafruit.com:8883/uuuuu/feeds/uuuuu.intruder";
    public static void main(String[] args) throws MqttException, URISyntaxException {
      //System.out.println(BROKER_URL);
      //URI uri = new URI(BROKER_URL);
      //String host = String.format("ssl://%s:%d", uri.getHost(), uri.getPort());
      //System.out.println("host = " + host);
      //if (!uri.getPath().isEmpty()) {
      //    System.out.println("topic = " + uri.getPath().substring(1));
      //}
      Subscriber sub = new Subscriber(BROKER_URL);
      sub.main(args);
    }
}