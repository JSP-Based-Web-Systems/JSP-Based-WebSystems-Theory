<%@ page language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>

<%
    request.setCharacterEncoding("UTF-8");

    String username = request.getParameter("username");

    if (username == null || username.trim().isEmpty()) {
        username = "방문자";
    }
%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>MVC1 예제 페이지</title>
</head>
<body>
<h2>MVC1 예제 페이지</h2>
    <form method="post">
        <label for="username">이름</label>
        <input id="username" name="username" type="text">
        <button type="submit">확인</button>
    </form>

    <p><%= username %>님, 환영합니다.</p>
</body>
</html>