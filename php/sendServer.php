<?php
$output = shell_exec('/scripts/stop.sh $comando 2>&1'); 
echo "<pre>$output</pre>";
?>
