<?php
$output = shell_exec('/scripts/stop.sh 2>&1'); 
echo "<pre>$output</pre>";
?>
