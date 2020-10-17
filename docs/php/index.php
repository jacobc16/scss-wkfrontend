<?php
$out = array();
foreach (array_diff(scandir('../objects/'), array('..', '.')) as $filename) {
    $out[$filename] = array();
    foreach (array_diff(scandir('../objects/'.$filename), array('..', '.')) as $file) {
        $out[$filename][$file] = file_get_contents('../objects/'.$filename.'/'.$file);
    }
}

echo json_encode($out);