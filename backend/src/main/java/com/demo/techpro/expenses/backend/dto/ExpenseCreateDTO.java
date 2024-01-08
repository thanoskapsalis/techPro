package com.demo.techpro.expenses.backend.dto;

import com.demo.techpro.expenses.backend.constants.Category;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ExpenseCreateDTO {

    @NotBlank
    private String product;

    @NotNull
    @Min(0)
    private Double cost;

    @NotNull
    private Category category;
}
