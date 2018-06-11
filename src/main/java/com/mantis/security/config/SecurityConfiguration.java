package com.mantis.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.mantis.security.service.MantisUserDetailsService;

@EnableWebSecurity
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Bean
    public UserDetailsService mongoUserDetails() {
        return new MantisUserDetailsService();
    }

	
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    	
    	UserDetailsService userDetailsService = mongoUserDetails();
        auth.userDetailsService(userDetailsService);
    }
    
    @Override
	public void configure(WebSecurity webSecurity) throws Exception {
		// TODO Auto-generated method stub
		webSecurity
				.ignoring()
				.antMatchers("*.js")
				.antMatchers("*.css")
				.antMatchers("*.jpg")
				.antMatchers("*.ico");
	}

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {

    	httpSecurity
	        .authorizeRequests()
	        .antMatchers("/").permitAll()
	        .antMatchers("/js/**").permitAll()
	        .antMatchers("/*.css").permitAll()
	        .antMatchers("/*.ico").permitAll()
	        .antMatchers("/*.jpg").permitAll()
	        .antMatchers("/rest/**").hasRole("user")
	        .anyRequest()
	        .fullyAuthenticated()
	        .and()
	        //.addFilterBefore(customFilter(), BasicAuthenticationFilter.class)
	        .httpBasic();
        httpSecurity.csrf().disable();

    }

}
