<template lang="html">
  <v-container>
    <v-data-table
     v-bind:headers="headers"
     :items="items"
     hide-actions
     class="elevation-1"
   >
   <template slot="items" scope="props">
     <td>{{ props.item.name }}</td>
     <td class="text-xs-right">{{ props.item.calories }}</td>
     <td class="text-xs-right">{{ props.item.fat }}</td>
     <td class="text-xs-right">{{ props.item.carbs }}</td>
     <td class="text-xs-right">{{ props.item.protein }}</td>
     <td class="text-xs-right">{{ props.item.sodium }}</td>
     <td class="text-xs-right">{{ props.item.calcium }}</td>
     <td class="text-xs-right">{{ props.item.iron }}</td>
   </template>
 </v-data-table>
</v-container>
</template>


<script>
export default {
  data: () => ({
    headers: [{
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      {
        text: 'Calories',
        value: 'calories'
      },
      {
        text: 'Fat (g)',
        value: 'fat'
      },
      {
        text: 'Carbs (g)',
        value: 'carbs'
      },
      {
        text: 'Protein (g)',
        value: 'protein'
      },
      {
        text: 'Sodium (mg)',
        value: 'sodium'
      },
      {
        text: 'Calcium (%)',
        value: 'calcium'
      },
      {
        text: 'Iron (%)',
        value: 'iron'
      }
    ],
    items: [{
        value: false,
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
      {
        value: false,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: '8%',
        iron: '1%'
      },
      {
        value: false,
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: '6%',
        iron: '7%'
      },
      {
        value: false,
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: '3%',
        iron: '8%'
      },
      {
        value: false,
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: '7%',
        iron: '16%'
      },
      {
        value: false,
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: '0%',
        iron: '0%'
      },
      {
        value: false,
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: '0%',
        iron: '2%'
      },
      {
        value: false,
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        sodium: 562,
        calcium: '0%',
        iron: '45%'
      },
      {
        value: false,
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: '2%',
        iron: '22%'
      },
      {
        value: false,
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        sodium: 54,
        calcium: '12%',
        iron: '6%'
      }
    ],
    orders: [{
      "quantity": 10,
      "price": 0.3,
      "buying": false,
      "personid": 1,
      "currency": "ETH",
      "offer_uuid": "0471ccf3-0768-475f-9763-954901f3d20c"
    }, {
      "quantity": 0,
      "price": 0.1,
      "buying": false,
      "personid": 1,
      "currency": "ETH",
      "offer_uuid": "e561000f-f539-4785-b17d-f40227542a80"
    }, {
      "quantity": 5,
      "price": 0.2,
      "buying": true,
      "personid": 1,
      "currency": "ETH",
      "offer_uuid": "00fe33bb-2888-4596-8a0b-92f68bfdac2a"
    }, {
      "quantity": 122,
      "price": 1.12,
      "buying": true,
      "personid": 2,
      "currency": "LTC",
      "offer_uuid": "00ce33bb-2888-4596-8a0b-92f68bfdac2a"
    }, {
      "quantity": 1,
      "price": 0.02,
      "buying": true,
      "personid": 1,
      "currency": "BCH",
      "offer_uuid": "e561000f-f429-4785-b17d-f40227542a80"
    }],
    props: {
      'v-data-table': {
        shared: ['filterable', 'loadable', 'theme'],
        params: [
          [
            'headers',
            'Array',
            '[]',
            'The array of headers'
          ],
          [
            'header-text',
            'String',
            'text',
            'If using an object, the text value for the header'
          ],
          [
            'hide-actions',
            'Boolean',
            'False',
            'Hide the table actions'
          ],
          [
            'hide-headers',
            'Boolean',
            'False',
            'Hide the table headers'
          ],
          [
            'items',
            'Array',
            '[]',
            'The array of table rows'
          ],
          [
            'no-results-text',
            'String',
            'No matching records found',
            'Display text when there are no filtered results'
          ],
          [
            'rows-per-page-text',
            'String',
            'Rows per page:',
            'The default rows per page text'
          ],
          [
            'rows-per-page-items',
            'Array',
            '[5, 15, 25, { text: "All", value: -1 }]',
            'The default values for the rows-per-page dropdown'
          ],
          [
            'select-all',
            '[Boolean, String]',
            'False',
            'Adds header row select all checkbox. Can either be a String which specifies which color is applied to the button, or a Boolean (which uses the default color)'
          ],
          [
            'item-key',
            'String',
            'id',
            'Determines the item value used for identifying selected items'
          ],
          [
            'search',
            'String',
            '-',
            'The search model for filtering results'
          ],
          [
            'filter',
            'Function',
            `(val, search) => boolean`,
            'The method used by customFilter to filter each individual item. The default function does a simple indexOf check. Should return a boolean indicating if item matches search input.'
          ],
          [
            'custom-filter',
            'Function',
            '(items, search, filter, headers) => array',
            'Custom search filter. A default implementation will be used if prop is not specified. Should return an array of items matching the search input.'
          ],
          [
            'custom-sort',
            'Function',
            '-',
            'Custom sort filter'
          ],
          [
            'must-sort',
            'Boolean',
            'False',
            'Forces at least one column to always be sorted instead of toggling between <code>sorted ascending</code>/<code>sorted descending</code>/<code>unsorted</code> states'
          ],
          [
            'total-items',
            'Number',
            '-',
            'Manually sets total number of row items, which disables built-in sort and pagination. Used together with pagination prop to enable server-side sort and pagination'
          ],
          [
            'pagination.sync',
            'Object',
            `{
              sortBy: 'column',
              page: 1,
              rowsPerPage: 5,
              descending: false,
              totalItems: 0
            }`,
            'Used to control pagination and sorting from outside the data table. Can also be used to set default sorted column'
          ],
          [
            'expand',
            'Boolean',
            'False',
            'Designates the table as containing rows that are expandable'
          ]
        ],
        model: {
          type: ['Array'],
          default: '',
          description: 'Holds selected row items'
        }
      },
      'v-edit-dialog': {
        params: [
          [
            'cancel-text',
            'String',
            'Cancel',
            `Set's the default text for the cancel button when using the <code>large</code> prop`
          ],
          [
            'save-text',
            'String',
            'Save',
            `Set's the default text for the save button when using the <code>large</code> prop`
          ],
          [
            'large',
            'Boolean',
            'False',
            'Attaches a submit and cancel button to the dialog'
          ],
          [
            'lazy',
            'Boolean',
            'False',
            'Lazily load the dialog contents'
          ],
          [
            'transition',
            'String',
            'v-slide-x-reverse-transition',
            'The transition of the edit dialog'
          ]
        ]
      }
    }
  })
}
</script>



<style lang="css">
</style>
