package FileCypher;

import java.io.*;

public class Cypher {
    public String key;
    public String data;
    public String originFile;
    public String newFile;
    public String defaultPath; // downloads or so
    boolean encDec = true;

    public String keyGen (int length){
        return "";
    }

    public boolean arguments(String[] args){

        if (args.length == 0 || args.length > 3) return false;

        this.originFile = args[0];

        this.newFile = args.length==1 ? args[0] :
                       args.length==2 ? args[0] : args[1];

        this.key = args.length == 2 ? args[1] : args.length == 3 ? args[2] : "";
        return true;
    }

    public char cypherChar(int ch, int offset){
        return (char) ((ch + key.charAt(offset))%256);
    }

    public char unCypherChar(int ch, int offset){
        return (char) ((256 + ch - key.charAt(offset))%256);
    }

    private void encOrDecript() throws IOException{

        try (FileInputStream input = new FileInputStream(originFile); FileOutputStream output = new FileOutputStream(newFile)) {
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

    public static void main(String[] args) throws IOException {
        Cypher fileCypher = new Cypher();

        if(!fileCypher.arguments(args)) {
            System.err.println("""
                    Format is wrong: OriginPath TargetPath Key
                                     OriginPath Key
                                     OriginPath (auto gen key)
                    """);
            System.exit(-1);
            return;
        }
        fileCypher.encOrDecript();
    }

}
