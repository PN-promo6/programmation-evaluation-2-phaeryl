<?php
$arrayNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function numberExists($array, $number) {
 $i = 0;
 $j = 0;
 $currentElement;
 while ($i < count($array)) {
    $currentElement = $array[$i]; 
    if ($number == $currentElement) {
        $j++;
    }
    $i++;
}
$result = $j;
return $result;
}
echo numberExists ($arrayNumbers, 48);
?>