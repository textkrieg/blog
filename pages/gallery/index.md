---
title: "Gallery"
date: 2012-12-02 00:00:00 +0000
tags: 
layout: post
---
<div id='gallery'>
  <r:gallery />
</div>

<script src="/vendor/gammagallery/js/jquery.masonry.min.js"></script>
<script src="/vendor/gammagallery/js/jquery.history.js"></script>
<script src="/vendor/gammagallery/js/js-url.min.js"></script>
<script src="/vendor/gammagallery/js/jquerypp.custom.js"></script>
<script src="/vendor/gammagallery/js/gamma.js"></script>
<script type="text/javascript">      
$(function() {
  var GammaSettings = {
      // order is important!
      viewport : [ {
        width : 1900,
        columns : 10
      }, {
        width : 1600,
        columns : 10
      }, {
        width : 1200,
        columns : 10
      }, {
        width : 900,
        columns : 8
      }, {
        width : 500,
        columns : 6
      }, {   
        width : 320,
        columns : 4
      }, {   
        width : 0,
        columns : 4
      } ]
  };
    
  Gamma.init( GammaSettings);
});
</script>
