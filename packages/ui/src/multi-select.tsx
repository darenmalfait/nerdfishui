'use client'

import * as React from 'react'
import {cx, ExtractProps, useControllableState} from '@nerdfish/utils'
import {DialogClose} from '@radix-ui/react-dialog'
import {Check, ChevronsUpDown, Edit2} from 'lucide-react'

import {Accordion} from './accordion'
import {AlertDialog} from './alert-dialog'
import {Badge} from './badge'
import {Button} from './button'
import {Command} from './command'
import {Dialog} from './dialog'
import {
  getInputClassName,
  Input,
  InputError,
  InputProps,
  Label,
  RawInputProps,
} from './input'
import {Popover} from './popover'
import {ScrollArea} from './scroll-area'

type Item = {
  value: string
  label: string
  color?: string
}

const badgeStyle = (color: string) => ({
  borderColor: `${color}20`,
  backgroundColor: `${color}30`,
  color,
})

type DialogLabelProps = {
  itemDeleteLabel?: string
  itemDeleteConfirmationTitleLabel?: string
  itemDeleteConfirmationDescriptionLabel?: string
  itemEditLabel?: string
  itemCancelLabel?: string
  itemSaveLabel?: string
  // eslint-disable-next-line react/no-unused-prop-types
  itemsEditLabel?: string
  // eslint-disable-next-line react/no-unused-prop-types
  itemsEditDescriptionLabel?: string
  // eslint-disable-next-line react/no-unused-prop-types
  itemsCreateLabel?: string
}

const defaultLabels: DialogLabelProps = {
  itemDeleteLabel: 'Delete',
  itemDeleteConfirmationTitleLabel: 'Are you sure?',
  itemDeleteConfirmationDescriptionLabel: 'You are about to delete the label',
  itemEditLabel: 'Edit',
  itemCancelLabel: 'Cancel',
  itemSaveLabel: 'Save',
  itemsEditLabel: 'Edit',
  itemsEditDescriptionLabel: 'Edit the labels',
  itemsCreateLabel: 'Create new item',
}

const CommandItemCreate = ({
  inputValue,
  items,
  onSelect,
  itemsCreateLabel = defaultLabels.itemsCreateLabel,
}: {
  inputValue: string
  items: Item[]
  onSelect: () => void
} & Pick<DialogLabelProps, 'itemsCreateLabel'>) => {
  const hasNoItems = !items
    .map(({value}) => value)
    .includes(`${inputValue.toLowerCase()}`)

  const render = inputValue !== '' && hasNoItems

  if (!render) return null

  // BUG: whenever a space is appended, the Create-Button will not be shown.
  return (
    <Command.Item
      key={`${inputValue}`}
      value={`${inputValue}`}
      className="text-secondary text-xs"
      onSelect={onSelect}
    >
      <div className={cx('mr-2 h-4 w-4')} />
      {itemsCreateLabel} &quot;{inputValue}&quot;
    </Command.Item>
  )
}

const DialogListItem = ({
  value,
  label,
  color,
  onSubmit,
  onDelete,
  itemDeleteLabel = defaultLabels.itemDeleteLabel,
  itemDeleteConfirmationTitleLabel = defaultLabels.itemDeleteConfirmationTitleLabel,
  itemDeleteConfirmationDescriptionLabel = defaultLabels.itemDeleteConfirmationDescriptionLabel,
  itemEditLabel = defaultLabels.itemEditLabel,
  itemCancelLabel = defaultLabels.itemCancelLabel,
  itemSaveLabel = defaultLabels.itemSaveLabel,
}: Item & {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onDelete: () => void
} & DialogLabelProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [accordionValue, setAccordionValue] = React.useState<string>('')
  const [inputValue, setInputValue] = React.useState<string>(label)
  const [colorValue, setColorValue] = React.useState<string>(color ?? '#ffffff')
  const disabled = label === inputValue && color === colorValue

  React.useEffect(() => {
    if (accordionValue !== '') {
      inputRef.current?.focus()
    }
  }, [accordionValue])

  return (
    <Accordion
      key={value}
      type="single"
      collapsible
      value={accordionValue}
      onValueChange={setAccordionValue}
    >
      <Accordion.Item value={value}>
        <div className="flex items-center justify-between">
          <div>
            <Badge variant="outline" style={badgeStyle(color ?? '#ffffff')}>
              {label}
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <Accordion.Trigger>{itemEditLabel}</Accordion.Trigger>
            <AlertDialog>
              <AlertDialog.Trigger asChild>
                <Button variant="danger" size="sm">
                  {itemDeleteLabel}
                </Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content>
                <AlertDialog.Header>
                  <AlertDialog.Title>
                    {itemDeleteConfirmationTitleLabel}
                  </AlertDialog.Title>
                  <AlertDialog.Description>
                    {itemDeleteConfirmationDescriptionLabel}{' '}
                    <Badge
                      variant="outline"
                      style={badgeStyle(color ?? '#ffffff')}
                    >
                      {label}
                    </Badge>{' '}
                    .
                  </AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                  <AlertDialog.Cancel>{itemCancelLabel}</AlertDialog.Cancel>
                  <AlertDialog.Action onClick={onDelete}>
                    {itemDeleteLabel}
                  </AlertDialog.Action>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog>
          </div>
        </div>
        <Accordion.Content>
          <form
            className="flex items-end gap-4"
            onSubmit={e => {
              onSubmit(e)
              setAccordionValue('')
            }}
          >
            <div className="grid w-full gap-3">
              <Input
                name="name"
                label="Label name"
                ref={inputRef}
                id="name"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className="h-8"
              />
            </div>
            <div className="grid gap-3">
              <Input
                name="color"
                label="Color"
                id="color"
                type="color"
                value={colorValue}
                onChange={e => setColorValue(e.target.value)}
                className="h-8 px-2 py-1"
              />
            </div>
            <Button type="submit" disabled={disabled} size="sm">
              {itemSaveLabel}
            </Button>
          </form>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}

type MultiSelectProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'onChange' | 'value' | 'defaultValue'
> &
  Pick<RawInputProps, 'hasError' | 'icon' | 'inputSize'> & {
    items?: Item[]
    id?: string
    placeholder?: string
    onChange?: React.Dispatch<React.SetStateAction<Item[] | undefined>>
    value?: Item[]
    defaultValue?: Item[]
    editDisabled?: boolean
    createDisabled?: boolean
    onCreateItem?: (item: Item) => void
    onDeleteItem?: (item: Item) => void
    onUpdateItem?: (item: Item) => void
    customEditListItem?: (
      props: ExtractProps<typeof DialogListItem>,
    ) => React.ReactElement
    labels?: DialogLabelProps
  }

const RawMultiSelect = React.forwardRef<HTMLInputElement, MultiSelectProps>(
  function RawMultiSelect(
    {
      value: valueProp,
      defaultValue,
      onChange,
      items: itemsProp,
      onCreateItem,
      onDeleteItem,
      hasError,
      onUpdateItem,
      editDisabled = true,
      createDisabled = true,
      placeholder = 'Select items',
      customEditListItem: CustomEditListItem,
      labels: labelsProp,
      ...props
    },
    ref,
  ) {
    const labels = {...defaultLabels, ...labelsProp}
    const {
      itemsEditLabel = defaultLabels.itemsEditLabel,
      itemsEditDescriptionLabel = defaultLabels.itemsEditDescriptionLabel,
    } = labels
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [items, setItems] = React.useState<Item[]>(itemsProp ?? [])
    const [openCombobox, setOpenCombobox] = React.useState(false)
    const [openDialog, setOpenDialog] = React.useState(false)
    const [inputValue, setInputValue] = React.useState<string>('')
    const [selectedValues = [], setSelectedValues] = useControllableState<
      Item[]
    >(valueProp, defaultValue ?? [], onChange)

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    function createItem(name: string) {
      const newItem = {
        value: name.toLowerCase(),
        label: name,
        color: '#ffffff',
      }

      onCreateItem?.(newItem)
      setItems([...items, newItem])
      setSelectedValues([...selectedValues, newItem])
    }

    function updateItem(item: Item, newItem: Item) {
      onUpdateItem?.(newItem)
      setItems(items.map(f => (f.value === item.value ? newItem : f)))
      setSelectedValues(items.map(f => (f.value === item.value ? newItem : f)))
    }

    function toggleItem(item: Item) {
      setSelectedValues(
        !selectedValues.includes(item)
          ? [...selectedValues, item]
          : selectedValues.filter(l => l.value !== item.value),
      )
      inputRef.current?.focus()
    }

    function deleteItem(item: Item) {
      onDeleteItem?.(item)
      setItems(items.filter(f => f.value !== item.value))
      setSelectedValues(selectedValues.filter(f => f.value !== item.value))
    }

    function onComboboxOpenChange(value: boolean) {
      inputRef.current?.blur() // HACK: otherwise, would scroll automatically to the bottom of page
      setOpenCombobox(value)
    }

    return (
      <div>
        <Popover open={openCombobox} onOpenChange={onComboboxOpenChange}>
          <Popover.Trigger asChild>
            <button
              role="combobox"
              aria-controls="listbox"
              aria-expanded={openCombobox}
              className={getInputClassName(
                `flex items-center justify-between ${props.className}`,
                hasError,
              )}
            >
              <span className="truncate">
                {selectedValues.length === 0 ? placeholder : null}
                {selectedValues.length === 1 ? selectedValues[0].label : null}
                {selectedValues.length === 2
                  ? selectedValues.map(({label}) => label).join(', ')
                  : null}
                {selectedValues.length > 2
                  ? `${selectedValues.length} items selected`
                  : null}
              </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </button>
          </Popover.Trigger>
          <Popover.Content className="w-[200px] p-0">
            <Command
              filter={(value, search) => {
                const item = items.find(({value: v}) => v === value)?.label

                if (item?.toLowerCase().includes(search.toLowerCase())) return 1
                return 0
              }}
              loop
            >
              <Command.Input
                ref={inputRef}
                placeholder="Search items..."
                value={inputValue}
                onValueChange={setInputValue}
              />
              <Command.Group>
                <ScrollArea className="h-32 w-full">
                  {items.map(item => {
                    const isActive = selectedValues.includes(item)
                    return (
                      <Command.Item
                        key={item.value}
                        value={item.value}
                        onSelect={() => toggleItem(item)}
                      >
                        <Check
                          className={cx(
                            'mr-2 h-4 w-4',
                            isActive ? 'opacity-100' : 'opacity-0',
                          )}
                        />
                        <div className="flex-1">{item.label}</div>
                        <div
                          className="h-4 w-4 rounded-full"
                          style={{backgroundColor: item.color}}
                        />
                      </Command.Item>
                    )
                  })}
                  {!createDisabled ? (
                    <CommandItemCreate
                      {...labels}
                      onSelect={() => createItem(inputValue)}
                      {...{inputValue, items}}
                    />
                  ) : null}
                </ScrollArea>
              </Command.Group>
              {!editDisabled ? (
                <>
                  <Command.Separator alwaysRender />
                  <Command.Group>
                    <Command.Item
                      value={`:${inputValue}:`} // HACK: that way, the edit button will always be shown
                      className="text-secondary text-xs"
                      onSelect={() => setOpenDialog(true)}
                    >
                      <div className={cx('mr-2 h-4 w-4')} />
                      <Edit2 className="mr-2 h-2.5 w-2.5" />
                      {itemsEditLabel}
                    </Command.Item>
                  </Command.Group>
                </>
              ) : null}
            </Command>
          </Popover.Content>
        </Popover>
        {!editDisabled ? (
          <Dialog
            open={openDialog}
            onOpenChange={open => {
              if (!open) {
                setOpenCombobox(true)
              }
              setOpenDialog(open)
            }}
          >
            <Dialog.Content className="flex max-h-[90vh] flex-col">
              <Dialog.Header>
                <Dialog.Title>{itemsEditLabel}</Dialog.Title>
                <Dialog.Description>
                  {itemsEditDescriptionLabel}
                </Dialog.Description>
              </Dialog.Header>
              <ScrollArea className="-mx-6 h-32 w-full flex-1 px-6 py-2">
                {items.map(item => {
                  const ListItem = CustomEditListItem ?? DialogListItem

                  return (
                    <ListItem
                      key={item.value}
                      {...labels}
                      onDelete={() => deleteItem(item)}
                      onSubmit={e => {
                        e.preventDefault()
                        const target = e.target as typeof e.target &
                          Record<'name' | 'color', {value: string}>
                        const newItem = {
                          value: target.name.value.toLowerCase(),
                          label: target.name.value,
                          color: target.color.value,
                        }
                        updateItem(item, newItem)
                      }}
                      {...item}
                    />
                  )
                })}
              </ScrollArea>
              <Dialog.Footer className="bg-secondary/40">
                <DialogClose asChild>
                  <Button variant="outline">Close</Button>
                </DialogClose>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog>
        ) : null}
        <div className="relative mt-3 overflow-y-auto">
          {selectedValues.map(({label, value, color}) => (
            <Badge
              key={value}
              variant="outline"
              style={color ? badgeStyle(color) : undefined}
              className="mb-2 mr-2"
            >
              {label}
            </Badge>
          ))}
        </div>
      </div>
    )
  },
)

const MultiSelect = React.forwardRef<
  HTMLInputElement,
  MultiSelectProps & InputProps
>(function MultiSelect(
  {defaultValue, error, name, label, className, description, id, ...props},
  ref,
) {
  const inputId = id ?? name
  const errorId = `${inputId}-error`
  const descriptionId = `${inputId}-description`

  return (
    <div className="w-full">
      {label ? (
        <div className="flex flex-col justify-between gap-y-1 md:flex-row md:gap-x-1 md:gap-y-0">
          <Label htmlFor={inputId} className="mb-2">
            {label}
          </Label>
          {description ? (
            <span className="text-sm text-gray-200" id={descriptionId}>
              {description}
            </span>
          ) : null}
        </div>
      ) : null}

      <RawMultiSelect
        hasError={!!error}
        {...(props as MultiSelectProps)}
        ref={ref}
        name={name}
        id={inputId}
        autoComplete={name}
        required
        defaultValue={defaultValue}
        aria-describedby={
          error ? errorId : description ? descriptionId : undefined
        }
      />

      {error ? (
        <InputError className="mt-2" id={errorId}>
          {error}
        </InputError>
      ) : null}
    </div>
  )
})

export {MultiSelect, RawMultiSelect}
