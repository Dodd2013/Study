// 初始化数据库创建表
var dao=require('./dao.js');

/*var permission=dao.permission.permission;
permission.sync();
var source=dao.permission.source; 资源和权限都在initPermission里
source.sync();*/
var user=dao.user
user.sync();
var role=dao.permission.role;
role.sync();
