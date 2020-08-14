package com.jie.common.lang;

import lombok.Data;

import java.io.Serializable;

@Data
public class Result implements Serializable {

    private int code;
    private String msg;
    private Object data;

    public static Result success(Object data) {
        Result returnResult = new Result();

        returnResult.setCode(200);
        returnResult.setMsg("Success");
        returnResult.setData(data);
        return returnResult;
    }
    public static Result success(int code, String msg, Object data) {
        Result returnResult = new Result();
        returnResult.setCode(code);
        returnResult.setMsg(msg);
        returnResult.setData(data);
        return returnResult;
    }

    public static Result fail(String msg) {
        Result returnResult = new Result();

        returnResult.setCode(400);
        returnResult.setMsg(msg);
        returnResult.setData(null);
        return returnResult;
    }

    public static Result fail(int code, String msg, Object data) {
        Result returnResult = new Result();
        returnResult.setCode(code);
        returnResult.setMsg(msg);
        returnResult.setData(data);
        return returnResult;
    }
}
