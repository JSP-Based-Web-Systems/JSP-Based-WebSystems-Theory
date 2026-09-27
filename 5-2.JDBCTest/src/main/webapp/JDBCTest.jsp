<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ page import="java.sql.*" %>

<%
    Connection conn = null;

    String driver = "oracle.jdbc.driver.OracleDriver";
    String url = "jdbc:oracle:thin:@//localhost:1521/XEPDB1";
    String user = "LOGIN";
    String password = "123456";

    boolean connect = false;

    try {
        Class.forName(driver);

        conn = DriverManager.getConnection(url, user, password);

        connect = true;

    } catch (SQLException e) {
        connect = false;

        System.out.println("데이터베이스 연결에 실패했습니다.");
        System.out.println("SQLState: " + e.getSQLState());
        System.out.println("오류 코드: " + e.getErrorCode());
        System.out.println("메시지: " + e.getMessage());

    } catch (ClassNotFoundException e) {
        connect = false;

        System.out.println("Oracle JDBC 드라이버를 찾을 수 없습니다.");
        e.printStackTrace();

    } finally {
        if (conn != null) {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="EUC-KR">
    <title>JDBC 연동 예제</title>
</head>

<body>

<%
    if (connect) {
%>
        <h3>데이터베이스 연결에 성공했습니다.</h3>
        Oracle Database에 정상적으로 연결되었습니다.
<%
    } else {
%>
        <h3>데이터베이스 연결에 실패했습니다.</h3>
<%
    }
%>

</body>
</html>
