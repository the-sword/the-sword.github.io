---
title: Maven构建SpringMVC项目实现注解及数据库事务管理
tags:
  - SpringMVC
categories: 开发总结
abbrlink: da9313af
subtitle:
catalog: true
header-img:
date: 2016-11-22 22:19:44
---
Maven构建SpringMVC项目实现注解及数据库事务管理
<!-- more -->
## 背景介绍

## 构建工程

​ 本项目搭建工具使用Eclipse。

### 用maven插件构建项目框架

​ 打开菜单File –New-MavenProject，点击**Next**，选择maven-archetype-webapp，点击**Next**，如下图：

[![img](http://i.imgur.com/36miC1f.png)](http://i.imgur.com/36miC1f.png)

​ 输入Group Id和artifact Id。Group Id一般填入项目名称，Artifact Id一般填入子项目的名称，如下图，点击**完成**。

[![img](http://i.imgur.com/RgEnsHK.png)](http://i.imgur.com/RgEnsHK.png)

​ 等待构建完成，生成的项目文件结构如下图所示：

[![img](http://i.imgur.com/L23ah7x.png)](http://i.imgur.com/L23ah7x.png)

​ 点击pom.xml文件，进入编辑界面，如下图： [![pom文件](https://the-sword.github.io/2016/09/03/Maven%E6%9E%84%E5%BB%BASpringMVC%E9%A1%B9%E7%9B%AE%E5%AE%9E%E7%8E%B0%E6%B3%A8%E8%A7%A3%E5%8F%8A%E6%95%B0%E6%8D%AE%E5%BA%93%E4%BA%8B%E5%8A%A1%E7%AE%A1%E7%90%86/pom%E6%96%87%E4%BB%B6.png)](https://the-sword.github.io/2016/09/03/Maven%E6%9E%84%E5%BB%BASpringMVC%E9%A1%B9%E7%9B%AE%E5%AE%9E%E7%8E%B0%E6%B3%A8%E8%A7%A3%E5%8F%8A%E6%95%B0%E6%8D%AE%E5%BA%93%E4%BA%8B%E5%8A%A1%E7%AE%A1%E7%90%86/pom%E6%96%87%E4%BB%B6.png)

​ 增加Properties：展开Properties选项，然后点击**Create…**按钮，如下图所示：然后Name字段填入springVersion，Value字段填入3.2.5.RELEASE。即在pom.xml中增加了一个属性springVersion，属性值为3.2.5.RELEASE（此处value是根据自己所使用的Spring版本设置，由于本人使用的是3.2.5版本，所以填入3.2.5.RELEASE）。

[![img](http://i.imgur.com/3qoICNE.png)](http://i.imgur.com/3qoICNE.png)

​ 增加Dependency：点击**Dependencies**标签，进入Dependencies编辑界面，点击**Add…**，添加Dependency属性，此过程是加入springframe的spring-web依赖库，${springVersion}是之前设置的属性，过程如下图所示：

​ Group Id：org.springframework

​ Artifact Id：spring-web

​ Version：${springVersion}

​ 点击**确定**按钮。

[![img](http://i.imgur.com/tMYI5bg.png)](http://i.imgur.com/tMYI5bg.png)

​ 同理再新建一个Dependency，该过程是加入springframe的spring-webmvc依赖库，${springVersion}是之前设置的属性，具体属性值如下所示：

​ Group Id：org.springframework

​ Artifact Id：spring-webmvc

​ Version：${springVersion}

​ 点击**确定**按钮。

​ 设置完成之后，Ctrl+S保存，Maven会自动构建工作空间，下载所需要的依赖库文件，下载完成之后，可以看到如下图所示的库文件：

目录结构

[![img](http://i.imgur.com/oBljhHT.png)](http://i.imgur.com/oBljhHT.png)

注意事项：
​ 由于后面会用到C3P0连接池，事务管理，mysql数据库驱动，所以还需要导入如左图蓝色标识的jar包

### 添加Source Fold

​ 完善目录，添加source folder（源文件夹）。添加src/main/java，src/test/resources，src/test/java目录，让目录变成标准的maven结构，如下图：

[![img](http://i.imgur.com/KUkXEv3.png)](http://i.imgur.com/KUkXEv3.png)

[![img](http://i.imgur.com/E3dqazg.png)](http://i.imgur.com/E3dqazg.png)

​ 注意：如果Eclipse建立Maven项目后无法建立src/main/java资源文件夹，可以在项目上右键选择properties（首选项），然后点击java build path（java构建路径），在Librarys（库）下，编辑JRE System Library（JRE系统库），选择workspace default jre（工作空间缺省JRE）就可以了。

## 建立数据库

### 新建数据库hib_demo

### 新建t_dept , t_employee表，格式分别如下：

t_dept

[![img](http://i.imgur.com/YsUIa0y.png)](http://i.imgur.com/YsUIa0y.png)

t_employee

[![img](http://i.imgur.com/hUE1weU.png)](http://i.imgur.com/hUE1weU.png)

##  注解及数据库事务管理

### 注解及数据库事务管理代码清单

#### Dept.java

```
package com.test.dept;
public class Dept {
	private int deptId;
	private String deptName;
	public int getDeptId() {
		return deptId;
	}
	public void setDeptId(int deptId) {
		this.deptId = deptId;
	}
	public String getDeptName() {
		return deptName;
	}
	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}
}
```

#### DeptDao.java

```
package com.test.dept;
import javax.annotation.Resource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 * dao实现，使用Spring对jdbc支持功能
 * @author zhou
 */
@Repository
public class DeptDao {
	
	@Resource
	private JdbcTemplate jdbcTemplate;
//	public void save(Dept dept){
//		String sql = "insert into t_dept (deptName) values(?)";
//		jdbcTemplate.update(sql,dept.getDeptName());
//	}
	public void save(String empvalue,String deptvalue){
	String sql1 = "insert into t_employee (empName) values(?)";
	jdbcTemplate.update(sql1,empvalue);
	String sql2 = "insert into t_dept (deptName) values(?)";
	jdbcTemplate.update(sql2,deptvalue);
}
}
```

#### TestJdbc.java

```
package com.test.dept;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class TestJdbc {
		// 部门dao
		@Resource
		private DeptDao deptDao;
		/*
		 * 事务控制
		 */
		@Transactional(
				readOnly = false,  // 读写事务
				timeout = -1,       // 事务的超时时间不限制
				//noRollbackFor = ArithmeticException.class,  // 遇到数学异常不回滚
				isolation = Isolation.DEFAULT,              // 事务的隔离级别，数据库的默认
				propagation = Propagation.REQUIRED			// 事务的传播行为
		)
		@RequestMapping("save.do")
		public void save(HttpServletRequest request){
			System.out.println("成功");
			String empValue=request.getParameter("empName");
			String deptValue=request.getParameter("deptName");
            //测试数据库事务，如有异常则回滚此数据库读写操作
			deptDao.save(empValue,deptValue);  // 保存员工名字和部门名字，如有异常则回滚此数据库读写操作
			int i = 1/0;					   //设置异常	
			deptDao.save(empValue,deptValue);  // 保存员工名字和部门名字
		}
}
```

#### jsp页面

#####  input.jsp

```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	 <form action="save.do"> 
		员工名：<input type="text" name="empName">
		部门名：<input type="text" name="deptName">
		<input type="submit" value="提交">
	</form>
</body>
</html>
```

##### save.jsp

```
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	传入数据库成功
</body>
</html>
```

### 项目进行SpringMvc配置

#### 配置web.xml

​ 配置web.xml，使其具有springmvc特性，主要配置DispatcherServlet。

```
<web-app xmlns="http://java.sun.com/xml/ns/javaee"  
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
      xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"  
      version="3.0">  
    
    <welcome-file-list>input.jsp</welcome-file-list>
  <!--配置DispatcherServlet表示，该工程将采用springmvc的方式。启动时也会默认在/WEB-INF目录下查找XXX-servlet.xml作为配置文件，XXX就是DispatcherServlet的名字-->
    <servlet>
        <servlet-name>spring</servlet-name>
        <servlet-class>
            org.springframework.web.servlet.DispatcherServlet
        </servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>spring</servlet-name>
        <url-pattern>*.do</url-pattern>
    </servlet-mapping>  
</web-app>
```

####  配置spring-servlet.xml

```
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"  
    xmlns:context="http://www.springframework.org/schema/context"  
    xmlns:mvc="http://www.springframework.org/schema/mvc" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:p="http://www.springframework.org/schema/p"
	xmlns:aop="http://www.springframework.org/schema/aop"
	xmlns:tx="http://www.springframework.org/schema/tx"  
    xsi:schemaLocation="  
        http://www.springframework.org/schema/beans       
        http://www.springframework.org/schema/beans/spring-beans-3.0.xsd  
        http://www.springframework.org/schema/context   
        http://www.springframework.org/schema/context/spring-context-3.0.xsd  
        http://www.springframework.org/schema/mvc  
        http://www.springframework.org/schema/mvc/spring-mvc-3.0.xsd
        http://www.springframework.org/schema/aop
        http://www.springframework.org/schema/aop/spring-aop.xsd
        http://www.springframework.org/schema/tx
     	http://www.springframework.org/schema/tx/spring-tx.xsd">  
    <!--该配置文件将配置两项重要的MVC特性：
		1.HandlerMapping,负责为DispatcherServlet这个前端控制器的请求查找Controller；

		2.ViewResolver,负责为DispatcherServlet查找Model And View的视图解析器。
-->
    <!-- 1. 数据源对象: C3P0连接池  我用的是Mysql数据库，不同数据库此处配置有所不同-->
	<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
		<property name="driverClass" value="com.mysql.jdbc.Driver"></property>
		<property name="jdbcUrl" value="jdbc:mysql:///hib_demo"></property>
		<property name="user" value="root"></property>
		<property name="password" value="root"></property>
		<property name="initialPoolSize" value="3"></property>
		<property name="maxPoolSize" value="10"></property>
		<property name="maxStatements" value="100"></property>
		<property name="acquireIncrement" value="2"></property>
	</bean>
	
	<!-- 2. JdbcTemplate工具类实例 -->
	<bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
		<property name="dataSource" ref="dataSource"></property>
	</bean>
	
	<!-- 事务管理器类 -->
	<bean id="txManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
		<property name="dataSource" ref="dataSource"></property>
	</bean>
	
	<!-- 对包中的所有类进行扫描，以完成Bean创建和自动依赖注入的功能需要更改 -->
	<context:component-scan base-package="com.test.dept"></context:component-scan>
	
	<!-- 注解方式实现事务： 指定注解方式实现事务 -->
	<tx:annotation-driven transaction-manager="txManager"/>
	
    <bean id="viewResolver"  
        class="org.springframework.web.servlet.view.InternalResourceViewResolver">  
        <property name="prefix" value="/WEB-INF/view/" />  
        <property name="suffix" value=".jsp" />  
    </bean>  
</beans>
```

​ 写完之后，项目结构如下：

[![img](http://i.imgur.com/uLSaYZb.png)](http://i.imgur.com/uLSaYZb.png)

### 测试结果

```
启动Tomcat，运行项目，进入input页面，如下图：

```

[![img](http://i.imgur.com/n2aA7GC.png)](http://i.imgur.com/n2aA7GC.png)

​ 会弹出如下提示，是因为我们加了int i =1/0；这个异常：

[![img](http://i.imgur.com/q5x59Zg.png)](http://i.imgur.com/q5x59Zg.png)

​ 最后去查找数据库发现，在异常之前进行的数据库也已回滚，并未产生读写，说明数据库事务管理成功!

## spring使用JdbcTemplate实现MySQL存储过程

### 存储过程优点

​ 存储过程（Stored Procedure）是一组为了完成特定功能的SQL语句集，经编译后存储在数据库中，用户通过指定存储过程的名字并给定参数（如果该存储过程带有参数）来调用执行它。

​ 一个存储过程是一个可编程的函数，它在数据库中创建并保存。它可以有SQL语句和一些特殊的控制结构组成。当希望在不同的应用程序或平台上执行相同的函数，或者封装特定功能时，存储过程是非常有用的。数据库中的存储过程可以看做是对编程中面向对象方法的模拟。

​ 存储过程通常有以下优点：

​ 1）存储过程增强了SQL语言的功能和灵活性。存储过程可以用流控制语句编写，有很强的灵活性，可以完成复杂的判断和较复杂的运算。

​ 2）存储过程允许标准组件是编程。存储过程被创建后，可以在程序中被多次调用，而不必重新编写该存储过程的SQL语句。而且数据库专业人员可以随时对存储过程进行修改，对应用程序源代码毫无影响.

​ 3）存储过程能实现较快的执行速度。如果某一操作包含大量的Transaction-SQL代码或分别被多次执行，那么存储过程要比批处理的执行速度快很多。因为存储过程是预编译的。在首次运行一个存储过程时查询，优化器对其进行分析优化，并且给出最终被存储在系统表中的执行计划。而批处理的Transaction-SQL语句在每次运行时都要进行编译和优化，速度相对要慢一些。

​ 4）存储过程能过减少网络流量。针对同一个数据库对象的操作（如查询、修改），如果这一操作所涉及的Transaction-SQL语句被组织程存储过程，那么当在客户计算机上调用该存储过程时，网络中传送的只是该调用语句，从而大大增加了网络流量并降低了网络负载。

​ 5）存储过程可被作为一种安全机制来充分利用。系统管理员通过执行某一存储过程的权限进行限制，能够实现对相应的数据的访问权限的限制，避免了非授权用户对数据的访问，保证了数据的安全。

### JdbcTemplate使用参考一下链接

```
http://www.cnblogs.com/lichenwei/p/3902294.html

http://lehsyh.iteye.com/blog/1579737

```

###  Spring使用JdbcTemplate调用Mysql存储过程：

#### 概述

​ 语法：

```
CREATE PROCEDURE sp_name ([ proc_parameter ]) [ characteristics..] routine_body
```

​ proc_parameter指定存储过程的参数列表，列表形式如下：

```
[IN|OUT|INOUT] param_name type
```

​ 其中in表示输入参数，out表示输出参数，inout表示既可以输入也可以输出；param_name表示参数名称；type表示参数的类型，该类型可以是MYSQL数据库中的任意类型。

​ 语法构建模板：

```
characteristic: 
    LANGUAGE SQL 
  | [NOT] DETERMINISTIC 
  | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA } 
  | SQL SECURITY { DEFINER | INVOKER } 
  | COMMENT 'string' 
routine_body: 
    Valid SQL procedure statement or statements
```

​ **LANGUAGE SQL** ：说明routine_body部分是由SQL语句组成的，当前系统支持的语言为SQL，SQL是LANGUAGE特性的唯一值

​ **[NOT] DETERMINISTIC** ：指明存储过程执行的结果是否正确。DETERMINISTIC 表示结果是确定的。每次执行存储过程时，相同的输入会得到相同的输出。

​ [NOT] DETERMINISTIC 表示结果是不确定的，相同的输入可能得到不同的输出。如果没有指定任意一个值，默认为[NOT] DETERMINISTIC

​ **CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA**：指明子程序使用SQL语句的限制。

​ CONTAINS SQL表明子程序包含SQL语句，但是不包含读写数据的语句；

​ NO SQL表明子程序不包含SQL语句；

​ READS SQL DATA：说明子程序包含读数据的语句；

​ MODIFIES SQL DATA表明子程序包含写数据的语句。

​ 默认情况下，系统会指定为CONTAINS SQL

​ **SQL SECURITY { DEFINER | INVOKER }** ：指明谁有权限来执行。DEFINER 表示只有定义者才能执行

​ INVOKER 表示拥有权限的调用者可以执行。默认情况下，系统指定为DEFINER

​ COMMENT ‘string’ ：注释信息，可以用来描述存储过程或函数

​ routine_body是SQL代码的内容，可以用BEGIN…END来表示SQL代码的开始和结束。

​ 下面的语句创建一个查询t1表全部数据的存储过程

```
DROP PROCEDURE IF EXISTS Proc;      
DELIMITER //    
CREATE PROCEDURE Proc()     
BEGIN     
SELECT * FROM t3;	
END//
DELIMITER ;
CALL Proc();
```

​ **注意：“DELIMITER //”语句的作用是将MYSQL的结束符设置为//，因为MYSQL默认的语句结束符为分号;，为了避免与存储过程\*中SQL语句结束符相冲突，需要使用DELIMITER 改变存储过程的结束符，并以“END//”结束存储过程。**

​ **存储过程定义完毕之后再使用DELIMITER ;恢复默认结束符。DELIMITER 也可以指定其他符号为结束符！！！！！！！！！！！**

​ **注意：当使用DELIMITER命令时，应该避免使用反斜杠（\）字符，因为反斜杠是MYSQL的转义字符！！！**

####  无返回值的存储过程调用

#####  存储过程代码：

```
DROP PROCEDURE IF EXISTS testProcedure; 

DELIMITER //
CREATE PROCEDURE testProcedure(IN empNameValue  VARCHAR(20),IN deptNameValue  VARCHAR(20))
BEGIN
INSERT INTO t_employee(empName) VALUES(empNameValue);
INSERT INTO t_dept(deptName) VALUES(deptNameValue);  
END//
DELIMITER ;
```

#####  JdbcTemplate调用该存储过程代码：

```
package com.test.procedure;     
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Types;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.CallableStatementCallback;
import org.springframework.jdbc.core.CallableStatementCreator;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class CallProcedure { 
  @Resource
  private JdbcTemplate jdbcTemplate;     
  public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {     
  this.jdbcTemplate = jdbcTemplate;     
  }    
  @RequestMapping("testProcedure.do")
  public void testProcedure(){   
     final String empValue=request.getParameter("empName");
	 final String deptValue=request.getParameter("deptName");
     this.jdbcTemplate.execute("call testProcedure('"+empValue+"','"+deptValue+"')");     
  }     
}
```

####  有返回值的存储过程（非结果集）

#####  存储过程代码：

```
DROP PROCEDURE IF EXISTS testProcedure; 

DELIMITER //
CREATE PROCEDURE testProcedure(IN empNameValue  VARCHAR(20),IN deptNameValue  VARCHAR(20),OUT employeeName INT(11))
BEGIN
SELECT dept_id INTO employeeName FROM t_employee WHERE empId=1;
INSERT INTO t_employee(empName) VALUES(empNameValue);
INSERT INTO t_dept(deptName) VALUES(deptNameValue);
  
END//
DELIMITER ;
```

#####  JdbcTemplate调用该存储过程代码：

```
package com.test.procedure;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Types;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.CallableStatementCallback;
import org.springframework.jdbc.core.CallableStatementCreator;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
public class CallProcedure {
	@Resource
	public JdbcTemplate jdbcTemplate;
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	@RequestMapping("testProcedure.do")
	public void testProcedure(HttpServletRequest request){
		final String empValue=request.getParameter("empName");
		final String deptValue=request.getParameter("deptName");
		//传入从jsp获取的参数
		//this.jdbcTemplate.execute("call testProcedure('"+empValue+"','"+deptValue+"')");
		String empTable=(String) jdbcTemplate.execute(new CallableStatementCreator() {	
			public CallableStatement createCallableStatement(Connection con)
					throws SQLException {
				CallableStatement cs = con.prepareCall("call testProcedure(?,?,?)");   
		           cs.setString(1, empValue);// 设置输入参数的值   
		           cs.setString(2, deptValue);
		           cs.registerOutParameter(3,Types.VARCHAR);// 注册输出参数的类型   
		           return cs; 
			}
		}, new CallableStatementCallback<Object>() {

			public Object  doInCallableStatement(CallableStatement cs)
					throws SQLException, DataAccessException {
				cs.execute();   
		           return cs.getString(3);// 获取输出参数的值
			}
		});
		System.out.println(empTable);
	}
}
```
