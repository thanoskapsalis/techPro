package com.demo.techpro.expenses.backend.constants;

public class ControllerEndpointConstants {
    public static final String API = "/api";
    public static final String EXPENSES = API + "/expenses";
    public static final String SEARCH = API + "/search";
    public static final String STATISTICS = API + "/statistics";

    public static final String BY_ID = "/{id}";

    public static class EndpointParameters {

        public static final String DATETIME_FORMAT = "yyyy-MM-dd";
        public static final String ID = "id";
        public static final String TIMESTAMP_FROM = "timestampFrom";
        public static final String TIMESTAMP_TO = "timestampTo";
        public static final String CATEGORY = "category";
        public static final String PRODUCT = "product";
        public static final String COST_FROM = "costFrom";
        public static final String COST_TO = "costTo";
    }
}
