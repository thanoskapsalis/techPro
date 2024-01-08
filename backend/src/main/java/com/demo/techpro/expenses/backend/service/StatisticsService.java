package com.demo.techpro.expenses.backend.service;

import com.demo.techpro.expenses.backend.dto.SearchCriteriaDTO;
import com.demo.techpro.expenses.backend.dto.StatsDTO;
import com.demo.techpro.expenses.backend.entity.Expense;
import com.demo.techpro.expenses.backend.mapper.ExpenseMapper;
import com.demo.techpro.expenses.backend.repository.ExpenseRepository;
import com.demo.techpro.expenses.backend.repository.specification.SearchSpecification;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class StatisticsService {

    private final ExpenseRepository repository;
    private final SearchSpecification specification;
    private final ExpenseMapper mapper;

    public StatsDTO calculateStatistics(SearchCriteriaDTO searchCriteriaDTO) {
        List<Expense> list = repository.findAll(Specification.where(specification.bySearchCriteria(searchCriteriaDTO)));
        StatsDTO stats = new StatsDTO();
        stats.setSum(0.0);
        stats.setAvg(0.0);
        stats.setMedian(0.0);
        if (list.isEmpty()) {
            return null;
        }
        list.sort((o1, o2) -> (int) (o1.getCost() - o2.getCost()));

        list.forEach(expense -> {
            if (stats.getMin() == null || expense.getCost() < stats.getMin().getCost()) {
                stats.setMin(mapper.toDTO(expense));
            }
            if (stats.getMax() == null || expense.getCost() > stats.getMax().getCost()) {
                stats.setMax(mapper.toDTO(expense));
            }
            stats.setSum(stats.getSum() + expense.getCost());

        });
        stats.setAvg(stats.getSum() / list.size());
        if (list.size() % 2 == 0) {
            stats.setMedian((list.get(list.size() / 2).getCost() + list.get(list.size() / 2 - 1).getCost()) / 2);
        } else {
            stats.setMedian(list.get(list.size() / 2).getCost());
        }
        stats.setTotal(list.size());
        return stats;
    }
}
