 package com.example.linkpack.security.config;

 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.context.annotation.Bean;
 import org.springframework.context.annotation.Configuration;
 import org.springframework.security.authentication.AuthenticationManager;
 import org.springframework.security.config.Customizer;
 import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
 import org.springframework.security.config.annotation.web.builders.HttpSecurity;
 import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
 import org.springframework.security.config.http.SessionCreationPolicy;
 import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
 import org.springframework.security.crypto.password.PasswordEncoder;
 import org.springframework.security.web.SecurityFilterChain;
 import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

 @EnableWebSecurity
 @Configuration
 public class securityConfiguration {

     @Autowired
     private JwtFilter jwtFilter;

     // this will encode password
     @Bean
     public PasswordEncoder passwordEncoder() {
         return new BCryptPasswordEncoder(12);
     }

     @Bean
     public AuthenticationManager authenticationManager(
             AuthenticationConfiguration config) throws Exception {
         return config.getAuthenticationManager();
     }



     @Bean
      public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
           http
                    // permission for frontend pages
                   .cors(Customizer.withDefaults())
                   // i use JWt
                   .csrf(csrfCustomizer -> csrfCustomizer.disable())
                   // rule of access
                   .authorizeHttpRequests(requst -> requst
                           .requestMatchers("/api/auth/**").permitAll()
                           .requestMatchers("/api1/**").authenticated()
                           .anyRequest().denyAll())
                    // without session
                    .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                    // connect jwtfilter to config
                   .addFilterBefore(jwtFilter , UsernamePasswordAuthenticationFilter.class);

           return http.build();
      }
     
     
 }
