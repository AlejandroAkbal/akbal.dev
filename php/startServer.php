<?php
$output = shell_exec('/scripts/start.sh 2>&1'); 
echo "<pre>$output</pre>";
?>
