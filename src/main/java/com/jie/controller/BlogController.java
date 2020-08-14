package com.jie.controller;


import cn.hutool.core.bean.BeanUtil;
import cn.hutool.core.lang.Assert;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.jie.common.lang.Result;
import com.jie.entity.Blog;
import com.jie.service.BlogService;
import com.jie.util.ShiroUtil;
import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author Jie's blog
 * @since 2020-08-08
 */
@RestController
public class BlogController {

    @Autowired
    BlogService blogService;

    @GetMapping("/api/blogs")
    public Result blogList(@RequestParam(defaultValue="1") Integer currentPage) {
        Page page = new Page(currentPage, 5);
        IPage pageData = blogService.page(page, new QueryWrapper<Blog>().orderByDesc("created"));
        List list = blogService.list(new QueryWrapper<Blog>().orderByDesc("created"));
        return Result.success(list);
    }

    @GetMapping("/api/blog/{id}")
    public Result blogDetail(@PathVariable(name = "id") Long id) {
        Blog blog = blogService.getById(id);
        Assert.notNull(blog, "Blog deleted");

        return Result.success(blog);
    }

    @DeleteMapping("/api/removeBlog/{id}")
    public Result removeBlog(@PathVariable(name = "id") Long id) {
        boolean res = blogService.removeById(id);
        if(res) return Result.fail("Cannot delete");
        else return Result.success(null);
    }
    @RequiresAuthentication
    @PostMapping("/api/blog/edit")
    public Result edit(@Validated @RequestBody Blog blog) {
        Blog temp = null;

        if(blog.getId() != null){
            temp = blogService.getById(blog.getId());

            Assert.isTrue(temp.getUserId().longValue() == ShiroUtil.getProfile().getId().longValue(), "No edit permit");
        }else {
            temp = new Blog();
            temp.setUserId(ShiroUtil.getProfile().getId());
            temp.setCreated(LocalDateTime.now());
            temp.setStatus(0);
        }
        BeanUtil.copyProperties(blog, temp, "id", "userId", "created", "status");
        blogService.saveOrUpdate(temp);

        return Result.success(null);
    }
}
