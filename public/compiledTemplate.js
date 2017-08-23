Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<table class=\"table table-bordered table-condensed\" id=\"view-current-markups\">\n  <thead>\n    <tr>\n      <th>SUPPLIER</th>\n      <th>PRICE/CT FORM</th>\n      <th>PRICE/CT TO</th>\n      <th>% MARK UP</th>\n      <th>$ MARK UP</th>\n      <th></th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>HASENFELD STEIN</td>\n      <td>$0</td>\n      <td>$1000</td>\n      <td>2.00</td>\n      <td>$25.00</td>\n      <td class=\"checkme\"><input type=\"checkbox\"></td>\n      <td class=\"delete\"><i class=\"icon-trash\"></i></td>\n    </tr>\n    <tr>\n      <td>VENUS JEWEL</td>\n      <td>$1001</td>\n      <td>$2000.0</td>\n      <td>25.00</td>\n      <td>0.00</td>\n      <td class=\"checkme\"><input type=\"checkbox\"></td>\n      <td class=\"delete\"><i class=\"icon-trash\"></i></td>\n    </tr>\n    <tr>\n      <td>DEVOTION DIAMONDS</td>\n      <td>$2001</td>\n      <td>$5000.0</td>\n      <td>5.00</td>\n      <td>0.00</td>\n      <td class=\"checkme\"><input type=\"checkbox\"></td>\n      <td class=\"delete\"><i class=\"icon-trash\"></i></td>\n    </tr>\n    <tr>\n      <td>FOREVERMARK SIGNATURE</td>\n      <td>$5001</td>\n      <td>$10000.0</td>\n      <td>10.00</td>\n      <td>0.00</td>\n      <td class=\"checkme\"><input type=\"checkbox\"></td>\n      <td class=\"delete\"><i class=\"icon-trash\"></i></td>\n    </tr>\n    <tr>\n      <td>PREMIER GEM</td>\n      <td>NA</td>\n      <td>NA</td>\n      <td>NA</td>\n      <td>NA</td>\n      <td class=\"checkme\"><input type=\"checkbox\"></td>\n      <td class=\"delete\"><i class=\"icon-trash\"></i></td>\n  </tbody>\n</table>\n<div class=\"save-publish-btn\"><a class=\"btn btn-primary\" href=\"javascript:void(0);\">Save & Publish</a></div>";
  })

Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"step-two-radio-btns\">\n  <div class=\"radio-item radio inline\">\n    <input type=\"radio\" id=\"price-range\" name=\"ritem\" value=\"price\" checked=\"checked\">\n    <label for=\"price-range\">PRICE</label>\n  </div>\n  <div class=\"radio-item radio inline\">\n    <input type=\"radio\" id=\"carat-range\" name=\"ritem\" value=\"carat\">\n    <label for=\"carat-range\">CARAT</label>\n  </div>\n</div>\n\n<div id=\"price-markup-range\">\n\n<div class=\"price-range-group\">\n  <div class=\"heading\">\n  <h5>Price range</h5>\n  </div>\n  <div class=\"field-group\">\n    <div class=\"finput\">\n      <span class=\"symbol\">$</span>\n      <input type=\"text\" class=\"input-mini\" name=\"\">\n       <span class=\"symbol\">-</span>\n    </div>\n    <div class=\"sinput\">\n      <span class=\"symbol\">$</span>\n      <input type=\"text\" class=\"input-mini\" name=\"\">\n    </div>\n  </div>\n\n</div>\n\n<div class=\"mark-up-group\">\n\n  <div class=\"heading\">\n  <h5>Mark up</h5>\n  </div>\n  <div class=\"field-group\">\n    <div class=\"tinput\">\n      <input type=\"text\" class=\"input-mini\" name=\"\">\n        <span class=\"symbol\">%</span>\n        <span class=\"symbol\">+</span>\n    </div>\n    <div class=\"foinput\">\n      <span class=\"symbol\">$</span>\n        <input type=\"text\" class=\"input-mini\" name=\"\">\n        <span title=\"Reset Pricing\" class=\"symbol question-mark\" data-placement='top'>?</span>\n    </div>\n\n    <div class=\"add-btn\"><a id=\"price-add-btn\" class=\"btn btn-primary\" href=\"javascript:void(0)\">ADD</a></div>\n  </div>\n  \n\n</div>\n</div>\n\n\n<!-- Carat DIVS STARTS-->\n\n<div id=\"carat-markup-range\" style=\"display: none;\">\n\n<div class=\"carat-range-group\">\n  <div class=\"heading\">\n  <h5>Carat range</h5>\n  </div>\n  <div class=\"field-group\">\n    <div class=\"finputCarat\">\n      <input type=\"text\" class=\"input-mini\" name=\"\">\n        <span class=\"symbol\">ct</span>\n    </div>\n    <div class=\"sinputCarat\">\n      <span class=\"symbol\">-</span>\n        <input type=\"text\" class=\"input-mini\" name=\"\">\n        <span class=\"symbol\">ct</span>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"carat-mark-up-group\">\n\n  <div class=\"heading\">\n  <h5>Mark up</h5>\n  </div>\n  <div class=\"field-group\">\n    <div class=\"tinputCarat\">\n      <input type=\"text\" class=\"input-mini\" name=\"\">\n        <span class=\"symbol\">%</span>\n        <span class=\"symbol\">+</span>\n    </div>\n    <div class=\"foinputCarat\">\n      <span class=\"symbol\">$</span>\n        <input type=\"text\" class=\"input-mini\" name=\"\">\n        <span title=\"Reset Pricing\" class=\"symbol question-mark\" data-placement='top'>?</span>\n    </div>\n\n    <div class=\"add-btn\"><a id=\"carat-add-btn\" class=\"btn btn-primary\" href=\"javascript:void(0)\">ADD</a></div>\n  </div>\n  \n\n</div>\n</div>\n\n<table class=\"table table-bordered table-condensed\" id=\"added-markups\">\n  <caption>\n    <h4>Mark up Added</h4>\n  </caption>\n  <thead>\n    <tr>\n      <th>PRICE/CT FROM</th>\n      <th>PRICE/CT TO</th>\n      <th>% MARK UP</th>\n      <th>$ MARK UP</th>\n      <th></th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody></tbody>\n</table>";
  })

Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<tr>\n	<td>";
  if (helper = helpers.$pcFirstInput) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.$pcFirstInput); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n	<td>";
  if (helper = helpers.$pcSecondInput) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.$pcSecondInput); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n	<td>";
  if (helper = helpers.$pcThirdInput) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.$pcThirdInput); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n	<td>";
  if (helper = helpers.$pcFourthInput) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.$pcFourthInput); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n	<td class='checkme'><input type='checkbox'></td>\n  <td class='delete'><i class=\"icon-trash\"></i></td>\n</tr>\n";
  return buffer;
  })

Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <tr>\n        <td><input type='checkbox'>";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (helper = helpers.company) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.company); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        <td>";
  if (helper = helpers.diamonds) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.diamonds); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n      </tr>\n      ";
  return buffer;
  }

  buffer += "<div class=\"span6\" id=\"add-handlebars-template\">\n  <table class=\"table table-bordered table-condensed pre-scrollable\" id=\"set-markup-add\">\n    <caption>\n      <div class=\"add-button\">\n        <a class=\"btn btn-primary\" href=\"javascript:void(0)\">ADD</a>\n      </div>\n    </caption>\n    <thead>\n      <tr>\n        <th><input type='checkbox'> OPT ID</th>\n        <th>COMPANY</th>\n        <th>DIAMONDS</th>\n      </tr>\n    </thead>\n    <tbody id=\"addbtn\">\n      ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tbody>\n  </table>\n</div>\n<!-- /span6 -->\n<div class=\"span6\">\n  <table class=\"table table-bordered table-condensed pre-scrollable\" id=\"set-markup-remove\">\n    <caption>\n      <div class=\"remove-button\">\n        <a class=\"btn btn-primary\" href=\"javascript:void(0)\">REMOVE X</a>\n      </div>\n    </caption>\n    <thead>\n      <tr>\n        <th><input type='checkbox'> OPT ID</th>\n        <th>COMPANY</th>\n        <th>DIAMONDS</th>\n      </tr>\n    </thead>\n    <tbody></tbody>\n  </table>\n</div>\n<!-- /span6 -->";
  return buffer;
  })