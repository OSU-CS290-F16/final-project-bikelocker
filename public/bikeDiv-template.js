(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['bikeDiv'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n  <section class=\"todo\" style=\"background-Image: url("
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + ")\">\n\n    <h2>"
    + ((stack1 = ((helper = (helper = helpers.what || (depth0 != null ? depth0.what : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"what","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>\n      <div class=\"todo-body\">\n        <p class=\"indent-wrapped\"><span class=\"where\">where: </span>"
    + ((stack1 = ((helper = (helper = helpers.where || (depth0 != null ? depth0.where : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"where","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n\n        <p class=\"indent-wrapped\"><span class=\"when\">when: </span>"
    + ((stack1 = ((helper = (helper = helpers.when || (depth0 != null ? depth0.when : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"when","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n\n        <p class=\"Serial#\">"
    + ((stack1 = ((helper = (helper = helpers.serial || (depth0 != null ? depth0.serial : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serial","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n\n        <p>"
    + ((stack1 = ((helper = (helper = helpers.details || (depth0 != null ? depth0.details : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"details","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n\n        <p class=\"hidden\">"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "</p\n      </div>\n\n    </section>\n";
},"useData":true});
})();