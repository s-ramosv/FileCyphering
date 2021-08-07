import java.io.*;

public class javaMethod {
    public String key;
    public String data;
    public String originFile;

    public String defaultPath; // downloads or so
    boolean encDec = true;

    public String keyGen (int length){
        return "";
    }

    public char cypherChar(int ch, int offset){
        return (char) ((ch + key.charAt(offset))%256);
    }

    public char unCypherChar(int ch, int offset){
        return (char) ((256 + ch - key.charAt(offset))%256);
    }

    public void encOrDecript(String originFile, String key) throws IOException{
        this.key = key;
        this.originFile = originFile;
        try (FileInputStream input = new FileInputStream(originFile); FileOutputStream output = new FileOutputStream(defaultPath)) {
            int offset = 0, keylen = key.length(), c;
            if(encDec)
                while ((c = input.read()) != -1) {
                    output.write(cypherChar(c,offset));
                    offset = offset == keylen-1 ? 0 : offset+1;
                }
            else while ((c = input.read()) != -1) {
                output.write(unCypherChar(c,offset));
                offset = offset == keylen-1 ? 0 : offset+1;
            }
        }
    }
}
