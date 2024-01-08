package com.demo.techpro.expenses.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StatsDTO {

    private ExpenseDTO min;
    private ExpenseDTO max;
    private Double avg;
    private Double median;
    private Double sum;
    private int total;
}
