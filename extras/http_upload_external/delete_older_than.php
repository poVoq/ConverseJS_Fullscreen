<?php

/**
 * A simple function that uses mtime to delete files older than a given age (in seconds)
 * Used to delete XMPP uploads older than 90 days.
 *
 * $dir String where the files are
 * $max_age Int in seconds
 * return String[] the list of deleted files
 */

function delete_older_than($dir, $max_age) {
  $list = array();

  $limit = time() - $max_age;

  $dir = realpath($dir);

  if (!is_dir($dir)) {
    return;
  }

  $dh = opendir($dir);
  if ($dh === false) {
    return;
  }

  while (($file = readdir($dh)) !== false) {
    $file = $dir . '/' . $file;
    if (!is_file($file)) {
      continue;
    }

    if (filemtime($file) < $limit) {
      $list[] = $file;
      unlink($file);
    }

  }
  closedir($dh);
  return $list;
}


// how to use:
$dir = "/var/www/xmpp/uploads";
$to = "admin@example.com";

// Delete uploads older than 90 days
$deleted = delete_older_than($dir, 3600*24*90);

$txt = "Deleted " . count($deleted) . " old upload(s):\n" .
    implode("\n", $deleted);

mail($to, "Uploads cleanup", $txt);
