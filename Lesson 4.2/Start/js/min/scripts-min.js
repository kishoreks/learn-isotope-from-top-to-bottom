$(function(){var t=$(".notes").isotope({itemSelector:".note",layoutMode:"fitRows",getSortData:{number:".note-number parseInt",title:".note-title",category:"[data-category]",date:function(t){return Date.parse($(t).find(".note-date").text())}}})});