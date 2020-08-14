package com.jie.service.impl;

import com.jie.entity.User;
import com.jie.mapper.UserMapper;
import com.jie.service.UserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author Jie's blog
 * @since 2020-08-08
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
