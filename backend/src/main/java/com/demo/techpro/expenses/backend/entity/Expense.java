package com.demo.techpro.expenses.backend.entity;

import com.demo.techpro.expenses.backend.constants.Category;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

import static com.demo.techpro.expenses.backend.constants.ControllerEndpointConstants.EndpointParameters.DATETIME_FORMAT;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String product;

    @NotNull
    private Double cost;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = DATETIME_FORMAT)
    @NotNull
    private Date timestamp;

    @Enumerated(EnumType.STRING)
    @NotNull
    private Category category;

}
