package com.demo.techpro.expenses.backend.controller;

import com.demo.techpro.expenses.backend.controller.swagger.ExpenseControllerSwagger;
import com.demo.techpro.expenses.backend.dto.ExpenseCreateDTO;
import com.demo.techpro.expenses.backend.dto.ExpenseDTO;
import com.demo.techpro.expenses.backend.dto.ExpenseUpdateDTO;
import com.demo.techpro.expenses.backend.service.ExpenseService;
import jakarta.validation.Valid;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.demo.techpro.expenses.backend.constants.ControllerEndpointConstants.BY_ID;
import static com.demo.techpro.expenses.backend.constants.ControllerEndpointConstants.EXPENSES;
import static com.demo.techpro.expenses.backend.constants.ControllerEndpointConstants.EndpointParameters.ID;

@RestController
@RequestMapping(EXPENSES)
@Getter
@Setter
@RequiredArgsConstructor
public class ExpenseController implements ExpenseControllerSwagger {

    private final ExpenseService expenseService;

    @Override
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ExpenseDTO> getAllExpenses() {
        return expenseService.getAllExpenses();
    }

    @Override
    @GetMapping(value = BY_ID, produces = MediaType.APPLICATION_JSON_VALUE)
    public ExpenseDTO getExpenseById(@PathVariable(ID) Long id) {
        return expenseService.getExpenseById(id);
    }

    @Override
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ExpenseDTO createExpense(@RequestBody @Valid ExpenseCreateDTO expenseCreateDTO) {
        return expenseService.createExpense(expenseCreateDTO);
    }

    @Override
    @PutMapping(value = BY_ID, produces = MediaType.APPLICATION_JSON_VALUE)
    public ExpenseDTO updateExpense(@PathVariable(ID) Long id, @RequestBody ExpenseUpdateDTO expenseUpdateDTO) {
        return expenseService.updateExpense(id, expenseUpdateDTO);
    }

    @Override
    @DeleteMapping(value = BY_ID)
    public void deleteExpense(@PathVariable(ID) Long id) {
        expenseService.deleteExpense(id);
    }


}
