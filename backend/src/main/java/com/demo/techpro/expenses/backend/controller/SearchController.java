package com.demo.techpro.expenses.backend.controller;

import com.demo.techpro.expenses.backend.constants.Category;
import com.demo.techpro.expenses.backend.controller.swagger.SearchControllerSwagger;
import com.demo.techpro.expenses.backend.dto.ExpenseDTO;
import com.demo.techpro.expenses.backend.dto.SearchCriteriaDTO;
import com.demo.techpro.expenses.backend.service.SearchService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

import static com.demo.techpro.expenses.backend.constants.ControllerEndpointConstants.EndpointParameters.*;
import static com.demo.techpro.expenses.backend.constants.ControllerEndpointConstants.SEARCH;

@RestController
@RequestMapping(SEARCH)
@Getter
@Setter
@RequiredArgsConstructor
public class SearchController implements SearchControllerSwagger {

    private final SearchService searchService;

    @Override
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ExpenseDTO> getExpenseByCriteria(
            @RequestParam(value = PRODUCT, required = false) String product,
            @RequestParam(value = COST_FROM, required = false) Double costFrom,
            @RequestParam(value = COST_TO, required = false) Double costTo,
            @RequestParam(value = CATEGORY, required = false) List<Category> categories,
            @RequestParam(value = TIMESTAMP_FROM, required = false) @DateTimeFormat(pattern = DATETIME_FORMAT) Date timestampFrom,
            @RequestParam(value = TIMESTAMP_TO, required = false) @DateTimeFormat(pattern = DATETIME_FORMAT) Date timestampTo) {
        SearchCriteriaDTO criteria = new SearchCriteriaDTO(product, costFrom, costTo, categories, timestampFrom, timestampTo);
        return searchService.getExpenseByCriteria(criteria);
    }
}
