package com.demo.techpro.expenses.backend.controller.swagger;

import com.demo.techpro.expenses.backend.dto.ExpenseCreateDTO;
import com.demo.techpro.expenses.backend.dto.ExpenseDTO;
import com.demo.techpro.expenses.backend.dto.ExpenseUpdateDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Tag(name = "Expenses", description = "Handle your expenses operations")
public interface ExpenseControllerSwagger {
    @Operation(operationId = "ExpenseController", description = "This method will return all the expenses", summary = "Get all the expenses")
    List<ExpenseDTO> getAllExpenses();

    @Operation(operationId = "ExpenseController", description = "This method will the expense for the specified id", summary = "Get expense by ID")
    ExpenseDTO getExpenseById(@PathVariable("id") Long id);

    @Operation(operationId = "ExpenseController", description = "This method will create a new expense", summary = "Create a new expense")
    ExpenseDTO createExpense(@RequestBody @Valid ExpenseCreateDTO expenseCreateDTO);

    @Operation(operationId = "ExpenseController", description = "This method will update the expense for the specified id", summary = "Update expense by ID")
    ExpenseDTO updateExpense(@PathVariable("id") Long id, @RequestBody ExpenseUpdateDTO expenseUpdateDTO);

    @Operation(operationId = "ExpenseController", description = "This method will delete the expense for the specified id", summary = "Delete expense by ID")
    void deleteExpense(@PathVariable("id") Long id);

}
