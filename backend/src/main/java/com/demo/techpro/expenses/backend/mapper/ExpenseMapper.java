package com.demo.techpro.expenses.backend.mapper;

import com.demo.techpro.expenses.backend.dto.ExpenseCreateDTO;
import com.demo.techpro.expenses.backend.dto.ExpenseDTO;
import com.demo.techpro.expenses.backend.entity.Expense;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface ExpenseMapper {

    ExpenseDTO toDTO(Expense expense);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "timestamp", ignore = true)
    Expense toEntity(ExpenseCreateDTO expenseCreateDTO);
}
