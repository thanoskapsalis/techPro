package com.demo.techpro.expenses.backend.dto;

import com.demo.techpro.expenses.backend.constants.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ExpenseUpdateDTO {
    private String product;
    private Double cost;
    private Category category;
}
