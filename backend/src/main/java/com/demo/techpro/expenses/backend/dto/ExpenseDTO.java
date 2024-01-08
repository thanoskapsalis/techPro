package com.demo.techpro.expenses.backend.dto;

import com.demo.techpro.expenses.backend.constants.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ExpenseDTO {
    private Long id;
    private String product;
    private Double cost;
    private Date timestamp;
    private Category category;
}
