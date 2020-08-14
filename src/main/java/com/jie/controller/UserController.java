package com.jie.controller;


import cn.hutool.core.map.MapUtil;
import cn.hutool.crypto.SecureUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.jie.common.dto.LoginDto;
import com.jie.common.lang.Result;
import com.jie.entity.User;
import com.jie.service.UserService;
import com.jie.util.JwtUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author Jie's blog
 * @since 2020-08-08
 */
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    JwtUtils jwtUtils;

    @GetMapping("index")
    public Result index() {

        User user = userService.getById(1L);
        Result retResult = Result.success(user);

        return retResult;
    }

    @PostMapping("save")
    public Result save(@Validated @RequestBody User user){
        return Result.success(user);
    }
//    @PostMapping("login")
//    public Result login(@Validated @RequestBody LoginDto loginDto, HttpServletResponse response) {
//
//        User user = userService.getOne(new QueryWrapper<User>().eq("username", loginDto.getUsername()));
//        Assert.notNull(user, "用户不存在");
//
//        if(!user.getPassword().equals(SecureUtil.md5(loginDto.getPassword()))){
//            return Result.fail("密码不正确");
//        }
//        String jwt = jwtUtils.generateToken(user.getId());
//
//        response.setHeader("Authorization", jwt);
//        response.setHeader("Access-control-Expose-Headers", "Authorization");
//
//        return Result.success(MapUtil.builder()
//                .put("id", user.getId())
//                .put("username", user.getUsername())
//                .put("avatar", user.getAvatar())
//                .put("email", user.getEmail())
//                .map()
//        );
//    }
//    @RequiresAuthentication
//    @GetMapping("logout")
//    public Result logout() {
//        SecurityUtils.getSubject().logout();
//        return Result.success(null);
//        return null;
//    }
}
