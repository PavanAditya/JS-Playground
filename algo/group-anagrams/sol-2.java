class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
         HashMap<String, List<String>> map = new HashMap<String, List<String>>();
        
        String hash;
        List<String> list;
        
        for(String s : strs){//o(n1)
            hash = getHashList(s); //O(n2)
            list = map.getOrDefault(hash, new ArrayList<String>());
            list.add(s);
            map.put(hash, list);
        }
        
        return new ArrayList<List<String>>(map.values());
    }
    
    private String getHashList(String s){        
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        return new String(chars);
    }
}