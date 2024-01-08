package com.demo.techpro.expenses.backend.dto;

import com.demo.techpro.expenses.backend.constants.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SearchCriteriaDTO {

    private String product;
    private Double costFrom;
    private Double costTo;
    private List<Category> categories;
    private Date timestampFrom;
    private Date timestampTo;
}
