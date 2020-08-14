package com.jie.service.impl;

import com.jie.entity.Blog;
import com.jie.mapper.BlogMapper;
import com.jie.service.BlogService;
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
public class BlogServiceImpl extends ServiceImpl<BlogMapper, Blog> implements BlogService {

}
