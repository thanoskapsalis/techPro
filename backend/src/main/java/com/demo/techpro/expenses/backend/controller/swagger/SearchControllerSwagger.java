package com.demo.techpro.expenses.backend.controller.swagger;

import com.demo.techpro.expenses.backend.constants.Category;
import com.demo.techpro.expenses.backend.dto.ExpenseDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Date;
import java.util.List;

@Tag(name = "Search", description = "Search your expenses")
public interface SearchControllerSwagger {

    @Operation(operationId = "SearchController", description = "This method will return all the expenses that match the criteria", summary = "Get expenses by criteria")
    List<ExpenseDTO> getExpenseByCriteria(
            @RequestParam(value = "product", required = false) String product,
            @RequestParam(value = "costFrom", required = false) Double costFrom,
            @RequestParam(value = "costTo", required = false) Double costTo,
            @RequestParam(value = "category", required = false) List<Category> categories,
            @RequestParam(value = "timestampFrom", required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") Date timestampFrom,
            @RequestParam(value = "timestampTo", required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") Date timestampTo);

}
