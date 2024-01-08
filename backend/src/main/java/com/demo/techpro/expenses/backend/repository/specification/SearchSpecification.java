package com.demo.techpro.expenses.backend.repository.specification;

import com.demo.techpro.expenses.backend.dto.SearchCriteriaDTO;
import com.demo.techpro.expenses.backend.entity.Expense;
import jakarta.persistence.criteria.Predicate;
import org.apache.logging.log4j.util.Strings;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Component
public class SearchSpecification {

    public Specification<Expense> bySearchCriteria(SearchCriteriaDTO searchCriteriaDTO) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (Strings.isNotBlank(searchCriteriaDTO.getProduct())) {
                predicates.add(cb.like(root.get("product"), searchCriteriaDTO.getProduct()));
            }

            if (Objects.nonNull(searchCriteriaDTO.getCostFrom())) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("cost"), searchCriteriaDTO.getCostFrom()));
            }
            if (Objects.nonNull(searchCriteriaDTO.getCostTo())) {
                predicates.add(cb.lessThanOrEqualTo(root.get("cost"), searchCriteriaDTO.getCostTo()));
            }

            if (Objects.nonNull(searchCriteriaDTO.getTimestampFrom())) {
                searchCriteriaDTO.getTimestampFrom().setHours(0);
                searchCriteriaDTO.getTimestampFrom().setMinutes(0);
                searchCriteriaDTO.getTimestampFrom().setSeconds(0);
                predicates.add(cb.greaterThanOrEqualTo(root.get("timestamp"), searchCriteriaDTO.getTimestampFrom()));
            }
            if (Objects.nonNull(searchCriteriaDTO.getTimestampTo())) {
                searchCriteriaDTO.getTimestampTo().setHours(23);
                searchCriteriaDTO.getTimestampTo().setMinutes(59);
                searchCriteriaDTO.getTimestampTo().setSeconds(59);
                predicates.add(cb.lessThanOrEqualTo(root.get("timestamp"), searchCriteriaDTO.getTimestampTo()));
            }

            if (Objects.nonNull(searchCriteriaDTO.getCategories()) && !searchCriteriaDTO.getCategories().isEmpty()) {
                predicates.add(root.get("category").in(searchCriteriaDTO.getCategories()));
            }

            return cb.and(predicates.toArray(new Predicate[]{}));
        };
    }
}
