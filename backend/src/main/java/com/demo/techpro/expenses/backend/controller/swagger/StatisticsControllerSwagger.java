package com.demo.techpro.expenses.backend.controller.swagger;

import com.demo.techpro.expenses.backend.constants.Category;
import com.demo.techpro.expenses.backend.dto.StatsDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Date;
import java.util.List;

@Tag(name = "Statistics", description = "Get statistics about your expenses")
public interface StatisticsControllerSwagger {

    @Operation(operationId = "StatisticsController", description = "This method will return statistics about your expenses", summary = "Get statistics")
    StatsDTO getStatistics(
            @RequestParam(value = "product", required = false) String product,
            @RequestParam(value = "costFrom", required = false) Double costFrom,
            @RequestParam(value = "costTo", required = false) Double costTo,
            @RequestParam(value = "category", required = false) List<Category> categories,
            @RequestParam(value = "timestampFrom", required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") Date timestampFrom,
            @RequestParam(value = "timestampTo", required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") Date timestampTo);
}
