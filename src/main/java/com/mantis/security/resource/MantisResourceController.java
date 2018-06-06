package com.mantis.security.resource;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MantisResourceController {
	
	@RequestMapping(method = RequestMethod.GET, value = "/")
	public String loginPage() {
		return "login.html";
	}	
	
	@RequestMapping(method = RequestMethod.GET, value = "/rest/hello")
	@ResponseBody
    public String hello(@AuthenticationPrincipal final UserDetails userDetails) {

	        String username = userDetails.getUsername();
	        Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();
	        authorities
	                .forEach(System.out::println);
	        System.out.println("qqq");

            return "Hello World";
    }
}
