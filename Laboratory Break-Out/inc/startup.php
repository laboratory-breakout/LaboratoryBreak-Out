<?php
include("../inc/config.php");
include("../../../php/PEAR/adodb/adodb.inc.php");
include("../../../php/PEAR/adodb/adodb-errorhandler.inc.php");
$DB = NewADOConnection("mysql");
//$DB->debug = true;
$DB->SetFetchMode(ADODB_FETCH_ASSOC);
$DB->Connect($CONF[db_host], $CONF[db_user], $CONF[db_pass], $CONF[db_database]);

?>