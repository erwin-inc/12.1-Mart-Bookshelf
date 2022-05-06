window.onload = init;

function init()
{
 var objMenu = document.getElementById('expandingmenu');
 var objNodes = getElementsByClassName(objMenu, 'li', 'subnodes');
 var tmpStyle;
 var iLength = objNodes.length;
 var objImage, objAnchor;
 var collapseall = document.getElementById('collapseall');
 var expandall = document.getElementById('expandall');
 expandall.alt = "Expand All";
 collapseall.alt = "Collapse All";

 for (var iCounter=0; iCounter<iLength; iCounter++)
  {
   with (objNodes[iCounter]) {
    objImage = document.createElement('img');
    objImage.setAttribute('src', 'plus.gif');
    objImage.setAttribute('width', 13);
    objImage.setAttribute('height', 13);
    objImage.setAttribute('alt', 'Expand ' + firstChild.firstChild.data);
    objAnchor = document.createElement('a');
    objAnchor.setAttribute('href', '#');
    objAnchor.setAttribute('title', objImage.alt);
    objAnchor.className = 'expcol';
    objAnchor.appendChild(objImage);
    objAnchor.onclick = function(){return expandItem(this);};
    insertBefore(objAnchor, firstChild);
   }
  }
 objNodes = null;
}

function isTOCLoaded() {
// return true, if toc.htm is loaded in TOC window.
 if (parent.TOC) 
  {
   var myPath=parent.TOC.location.pathname;
   var myFile=myPath.substr(myPath.length-7);
   if (myFile == 'toc.htm')
    {
     return true;
    } 
   else 
    {
     return false; 
    }
  } 
 else 
  {
   return false;
  }
}

function expandall()
{
 var objMenu = document.getElementById('expandingmenu');
 var objNodes = objMenu.getElementsByTagName('img');
 var iLength = objNodes.length;
 for (var iCounter=0; iCounter<iLength; iCounter++)
  {
    var objImage = objNodes[iCounter];
    var strAlt = objImage.alt;
    strAlt = strAlt.replace(/^Expand/i, 'Collapse');
    objImage.setAttribute('alt', strAlt);
    objImage.setAttribute('title', strAlt);
    objImage.setAttribute('src', 'minus.gif');
  }
 objNodes = null;
 objNodes = objMenu.getElementsByTagName('ul');
 iLength = objNodes.length;
 for (var iCounter=0; iCounter<iLength; iCounter++)
  {
   var objUL = objNodes[iCounter];
   objUL.style.visibility = 'visible';
   objUL.style.display = 'block'; 
  }
 objNodes = null;
}

function collapseall()
{ 
 var objMenu = document.getElementById('expandingmenu');

 objNodes = objMenu.getElementsByTagName('ul');
 iLength = objNodes.length;
 for (var iCounter=0; iCounter<iLength; iCounter++)
  {
   var objUL = objNodes[iCounter];
   objUL.style.visibility = 'hidden';
   objUL.style.display = 'none'; 
  }
 objNodes = null;

 var objNodes = objMenu.getElementsByTagName('img');
 var iLength = objNodes.length;
 for (var iCounter=0; iCounter<iLength; iCounter++)
  {
   var objImage = objNodes[iCounter];
   var strAlt = objImage.alt;
   strAlt = strAlt.replace(/^Collapse/i, 'Expand');
   objImage.setAttribute('alt', strAlt);
   objImage.setAttribute('title', strAlt); 
   objImage.setAttribute('src', 'plus.gif');
  }
 objNodes = null;
}

function expand(id) {
  var objUL = parent.TOC.document.getElementById('s'+id);
  var objItem = objUL.previousSibling.previousSibling.previousSibling;
  var objImage = objItem.firstChild;
  var objAnchor = objItem.nextSibling;
  var strAlt = objImage.alt;
  objUL.style.visibility = 'visible';
  objUL.style.display = 'block';
  objImage.setAttribute('src', 'minus.gif'); 
  strAlt = strAlt.replace(/^Expand/i, 'Collapse');
  objImage.setAttribute('alt', strAlt);
  objImage.setAttribute('title', strAlt);
  objAnchor.focus();
  return false;
} 

function expand2(id) {
  var objUL = parent.TOC.document.getElementById('s'+id);
  var objItem = objUL.previousSibling.previousSibling.previousSibling;
  var objImage = objItem.firstChild;
  var objAnchor = objItem.nextSibling;
  var strAlt = objImage.alt;
  objUL.style.visibility = 'visible';
  objUL.style.display = 'block';
  objImage.setAttribute('src', 'minus.gif'); 
  strAlt = strAlt.replace(/^Expand/i, 'Collapse');
  objImage.setAttribute('alt', strAlt);
  objImage.setAttribute('title', strAlt);
  return false;
} 

function highlight(id) {
 var obj = parent.TOC.document.getElementById('a'+id);
 if ((typeof obj != "object")||(obj == null)) 
  return;
 try { obj.focus(); } catch(e){ }
}

function expandItem(objItem)
{
 var objUL = objItem.nextSibling.nextSibling.nextSibling;
 var objImage = objItem.firstChild;
 var objAnchor = objItem.nextSibling;
 var strAlt = objImage.alt;
 if (objUL.style.display == 'block')
  {
    objImage.setAttribute('src', 'plus.gif');
    strAlt = strAlt.replace(/^Collapse/i, 'Expand');
    objUL.style.visibility = 'hidden';
    objUL.style.display = 'none';
  }
 else
  {
   objImage.setAttribute('src', 'minus.gif');
   strAlt = strAlt.replace(/^Expand/i, 'Collapse');
   objUL.style.visibility = 'visible';
   objUL.style.display = 'block';
  }
 objImage.setAttribute('alt', strAlt);
 objItem.setAttribute('title', strAlt);
 objAnchor.focus();
 return false;
}

function getElementsByClassName(objElement, strTagName, strClassName)
{
 var objCollection = objElement.getElementsByTagName(strTagName);
 var arReturn = [];
 var strClass, arClass, iClass;
 for(var iCounter=0; iCounter<objCollection.length; iCounter++)
  {
   strClass = objCollection[iCounter].className;
   if (strClass)
    {
     arClass = strClass.split(' ');
     for (iClass=0; iClass<arClass.length; iClass++)
      {
       if (arClass[iClass] == strClassName)
        {
         arReturn.push(objCollection[iCounter]);
         break;
        }
      }
    }
  }
 objCollection = null;
 return (arReturn);
}
