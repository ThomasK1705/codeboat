<?php
/**
 * Created by PhpStorm.
 * User: Tülin
 * Date: 20.06.2015
 * Time: 18:08
 */
$myfile = fopen("books.txt", "w") or die("Unable to open file!");
if(isset($_GET['submit'])){
    $txt = $_GET['autor'].', '.$_GET['titel'].', '.$_GET['kapitel'].', '.$_GET['art'].', '.
        $_GET['isbn'].', '.$_GET['jahr'].', '.$_GET['auflage'].';';
    fwrite($myfile, $txt);
}
fclose($myfile);

