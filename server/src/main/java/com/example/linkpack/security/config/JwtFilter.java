package com.example.linkpack.config;

import com.example.linkpack.Services.CustomUserDetailsService;
import com.example.linkpack.Services.JwtService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final CustomUserDetailsService customUserDetailsService;

    public JwtFilter(JwtService jwtService, CustomUserDetailsService customUserDetailsService) {
        this.jwtService = jwtService;
        this.customUserDetailsService = customUserDetailsService;
    }


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");
        System.out.println("JWT FILTER HIT: " + request.getRequestURI());

        if(authHeader != null && authHeader.startsWith("Bearer ")){

            String Header  = request.getHeader("Authorization");
            System.out.println("AUTH HEADER = " + authHeader);

            String token = authHeader.substring(7);
            String username = jwtService.extractUsername(token);

            UserDetails user = customUserDetailsService.loadUserByUsername(username);
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                    user ,
                    null ,
                    user.getAuthorities()
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);
            System.out.println("AUTH SET FOR USER: " + username);

        }

        filterChain.doFilter(request , response);


    }
}
