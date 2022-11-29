class Solution {

    function twoSum($nums, $target){
      $N = count($nums);
      $map = [];
      for ($i=0; $i < $N; $i++) { 
        $num = $nums[$i];
        $solution = $target - $num;
        if(!isset($map[$num])){
          $map[$num] = [
                          'index' => $i,
                          'solution' => $solution
                        ];
        }
        if (isset($map[$solution]) && $map[$solution]['index'] != $i)
          return [$i, $map[$solution]['index']];
      }
    }
   
}