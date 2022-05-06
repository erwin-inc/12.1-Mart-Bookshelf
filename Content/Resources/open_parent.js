// Copyright (c)2004 AuthorIT Software Corporation Ltd.  All rights reserved.
function loadParent() {
  if (self == top){ 
    window.location='index.htm?toc.htm?'+getFilename(location.href);
  } 
}

function getFilename(pstrPath) {
  var lngIndex=pstrPath.lastIndexOf('/');
  if (lngIndex > -1) {
    return pstrPath.slice(lngIndex+1);
  } else {
    return pstrPath;
  }
}